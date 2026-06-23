import requests
import re
import json
import os

SERVER_PAGE_URL = "https://cpt-hedge.com/servers"
DATA_MARKER = "52164:function(e){e.exports=JSON.parse('"
OUTPUT_PATH = "client/src/data/servers.json"

def fetch_servers():
    try:
        print(f"Fetching {SERVER_PAGE_URL}...")
        response = requests.get(SERVER_PAGE_URL, timeout=30)
        if response.status_code != 200:
            print(f"Error fetching main page: {response.status_code}")
            return None
        
        html = response.text
        scripts = re.findall(r'<script[^>]+src="([^"]+)"', html)
        print(f"Found {len(scripts)} scripts to check.")
        
        for script_url in scripts:
            if not script_url.startswith('http'):
                script_url = "https://cpt-hedge.com" + script_url
            
            try:
                res = requests.get(script_url, timeout=30)
                if res.status_code == 200 and DATA_MARKER in res.text:
                    print(f"Found data marker in {script_url}")
                    content = res.text
                    start_idx = content.find(DATA_MARKER) + len(DATA_MARKER)
                    end_idx = -1
                    escaped = False
                    for i in range(start_idx, len(content)):
                        if not escaped and content[i] == "'":
                            end_idx = i
                            break
                        if not escaped and content[i] == "\\":
                            escaped = True
                        else:
                            escaped = False
                    
                    if end_idx != -1:
                        data_str = content[start_idx:end_idx]
                        data = json.loads(data_str)
                        return data['c']
            except Exception as e:
                print(f"Error checking script {script_url}: {e}")
                continue
                
    except Exception as e:
        print(f"General exception: {e}")
    return None

if __name__ == "__main__":
    # Ensure the directory exists
    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    
    servers = fetch_servers()
    if servers:
        with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
            json.dump(servers, f, ensure_ascii=False, indent=2)
        print(f"Successfully updated {len(servers)} servers to {OUTPUT_PATH}")
    else:
        print("Failed to fetch servers. No changes made.")
        exit(1)
