module.exports = {
  apps: [
    {
      name: "my-nextjs-app", // Change this to your app's name
      script: "node_modules/next/dist/bin/next",
      args: "start", // Command to start the production server
      cwd: "", // ABSOLUTE path to your app directory
      instances: "max", // Number of CPU cores to use
      exec_mode: "cluster", // Enable clustering for performance
      env: {
        NODE_ENV: "production",
        PORT: 3000, // The port your Next.js app will run on internally
      },
    },
  ],
};
