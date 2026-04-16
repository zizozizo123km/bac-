/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Capacitor Starter</h1>
        <p className="text-gray-600 mb-6">
          This application is ready to be integrated with Capacitor.
        </p>
        <div className="space-y-4">
          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-blue-700 transition">
            Sync with Capacitor
          </button>
          <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-200 transition">
            Check Plugins
          </button>
        </div>
      </div>
    </div>
  );
}
