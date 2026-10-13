export default {
  apps: [{
    name: "vps-web",
    script: "bun",
    args: "prod",
    autorestart: true,
    restart_delay: 5000,
  }]
}