/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "res.cloudinary.com", // if your website has no www, drop it
        },
        {
          protocol: "https",
          hostname: "cdn.rareblocks.xyz",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
        {
          protocol: "https",
          hostname: "cdn.rareblocks.xyz",
        },
        {
          protocol: "https",
          hostname: "images.pexels.com",
        },
        {
          protocol: "https",
          hostname: "avatars.githubusercontent.com",
        },{
          protocol: "https",
          hostname: "lh3.googleusercontent.com",
        },
      ],
    },
    experimental:{
      swcPlugins:[
        ["next-superjson-plugin", {}]
      ]
    }
  };
  
  export default nextConfig;
  