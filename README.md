# ....... Under Development dont use this now ..........
 

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
* Check out this [documnetation](https://pocketbase.io/docs/) for reference to setup.
```
git clone https://github.com/KISHOREkevin/homelab-dashboard.git
cd homelab-dashboard
npm install
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


### Let me know if you want to include:
- Contribution guidelines
- A "To-do" or "Future Features" section  
#### I can add that as well!
