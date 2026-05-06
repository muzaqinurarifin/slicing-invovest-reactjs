import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen items-center">
      {/* kiri */}
      <div className="bg-gray-50 h-full flex items-center justify-center p-6">
        <img
          src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
          alt=""
          className="max-w-full w-96"
        />
      </div>

      {/* kanan */}
      <div className="p-6 flex items-center justify-center">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
