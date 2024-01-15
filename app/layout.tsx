import "styles/globals.css";
export const metadata = {
  title: "Qwikio",
  description: "At Qwikio Inc., we stand at the forefront of electric vehicle (EV) technology. Our mission is to revolutionize the way the world moves, using groundbreaking technology to make sustainable transportation not just a choice, but a way of life.",
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
