export const metadata = {
title: "RezeChan",
description: "The Privacy Native Meme Revolution",
};


import "./globals.css";


export default function RootLayout({ children }) {
return (
<html lang="en">
<body className="bg-black text-white">{children}</body>
</html>
);
}
