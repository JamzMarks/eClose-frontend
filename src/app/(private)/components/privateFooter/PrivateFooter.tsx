export const PrivateFooter = () => {
  return (
    <footer className="w-full p-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} My Application. All rights reserved.
      </p>
      <p className="text-xs mt-2">
        Made with ❤️ by Your Name
      </p>
    </footer>
  );
}

export default PrivateFooter;