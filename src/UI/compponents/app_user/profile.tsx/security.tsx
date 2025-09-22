const Security = () => {
    return (
        <div className="space-y-6">
            <div className="profile-card rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 unicoin-yellow">Security Settings</h3>

                <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 gradient-card rounded-lg">
                        <div>
                            <div className="font-medium">Two-Factor Authentication</div>
                            <div className="text-sm text-gray-400">Extra security for your account</div>
                        </div>
                        <div className="w-12 h-6 bg-green-600 rounded-full flex items-center p-1">
                            <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-3 gradient-card rounded-lg">
                        <div>
                            <div className="font-medium">Change Password</div>
                            <div className="text-sm text-gray-400">Last changed 2 months ago</div>
                        </div>
                        <button className="floating-action text-black px-3 py-1 rounded text-sm font-medium">
                            Change
                        </button>
                    </div>

                    <div className="flex items-center justify-between p-3 gradient-card rounded-lg">
                        <div>
                            <div className="font-medium">Login Notifications</div>
                            <div className="text-sm text-gray-400">Get notified of new logins</div>
                        </div>
                        <div className="w-12 h-6 bg-green-600 rounded-full flex items-center p-1">
                            <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Security