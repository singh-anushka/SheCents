/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/api/(.*)",
                headers:[
                    {
                        key: "Acess-Control-Allow-Origin",
                        value:"*",
                    },
                    {
                        key: "Acess-Control-Allow-Methods",
                        value:"GET,POST,PUT,DELETE,OPTIONS"
                    },
                   {
                        key: "Acess-Control-Allow-Headers",
                        value:"Content-Type,Authorization"
                    }, 
                    {
                        key: "Content-Range",
                        value:"bytes : 0-9/*"
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
