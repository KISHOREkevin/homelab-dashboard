# Simple and minimal Dashboard for homelab
![Homelab Dashboard](https://github.com/user-attachments/assets/11e45f67-90d0-4fe9-b799-b09da6b65b4d)

A straightforward dashboard for easily accessing your self-hosted services via a collection of links and their corresponding names. This project aims to provide a simple, centralized place to keep track of and access the various applications and services running in your homelab.

* **Link Management:** Easily add and manage links to your hosted services.
* **Service Naming:** Assign clear names to your links for easy identification.
* **Centralized Access:** Provides a single page to quickly access all your important homelab services.

## Built with technologies such as :
* React
* Vite
* Tailwind CSS
* Pocketbase
  
# Self-Host ( Manual )
* Setup the pocketbase in your system.
* Check out this [documentation](https://pocketbase.io/docs/) for reference to setup.
* Start the `Pocketbase server`
```
git clone https://github.com/KISHOREkevin/homelab-dashboard.git
cd homelab-dashboard
npm install
```
* create `.env` file in root folder and paste this
```
 VITE_DB_URL=http://localhost:8090
```
* Then run the application
```
npm run dev
```
* If you want to change port , open vite.config,js
```
export default defineConfig({
 plugins: [react(),tailwindcss()],
   optimizeDeps: {
      exclude: ['@ffmpeg/ffmpeg'],
    }
    server:{
      port:<your-port>
    }
  })
```
* Inside the `defineConfig` function add the server option with your preferred `port`.
* Open browser and go to http://localhost:[your-port]/

# Self-Host (Docker)
* Create an network
 ```
docker network create homelab-dashboard-network
```
* Run this docker statement for backend service:
```
 docker run -d \
    --restart unless-stopped \
    --name homelab-dashboard-server \
    --volume homelab-dashboard-data:/pb_data \
    --network homelab-dashboard-network \
    kishorekevin/homelab-dashboard-client:latest
```
*  Run this docker statement for frontend service :
```
  docker run -d \
    -p <Your port>:5173 \
    --restart unless-stopped \
    --name homelab-dashboard-client \
    --network homelab-dashboard-network \
    kishorekevin/homelab-dashboard-client:latest
```
* Open browser and go to http://localhost:[your-port]/

# Self-Host (Docker Compose)
* Download this docker compose file
  [docker-compose.yml](https://raw.githubusercontent.com/KISHOREkevin/homelab-dashboard/refs/heads/main/docker-compose.yml)
* If you want to change port , open the docker compose file and change the post section as given below
  ```
  ports:
      - <Your port>:5173
  ```
* Run this compose script.
  ```
   docker compose up -d
  ```
* Open browser and go to http://localhost:[your-port]/

# License
This project is licensed under the MIT License.

# Acknowledgements
- [Pocketbase](https://pocketbase.io/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

# Author
Kishore Kevin   
[Portfolio](https://kishorekevin.netlify.app/) | [github](https://github.com/KISHOREkevin/) | [LinkedIn](https://www.linkedin.com/in/kishore-kevin-a5a873290) | 
[Youtube Channel](https://youtube.com/@codex_arch)

### Let me know if you want to include:
- Contribution guidelines
- A "To-do" or "Future Features" section  
#### I can add that as well!

## Note : This project can be used in many cases like used as Bookmark Manager, Link Holders or what ever as your wish
