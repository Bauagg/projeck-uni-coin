const UMKMEventTrading = () => {
    const umkmEvents = [
        { name: 'Coffee Festival Kemang', impact: '+15 UniCoin demand', status: 'live' },
        { name: 'Pasar Tani Weekend', impact: '+8% trading volume', status: 'upcoming' },
        { name: 'Fashion Local Market', impact: '+12 new merchants', status: 'ended' },
    ];

    return (
        <div className="trading-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 unicoin-yellow">UMKM Events Impact</h3>
            <div className="space-y-4">
                {umkmEvents.map((event, index) => (
                    <div key={index} className="gradient-card rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium">{event.name}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs ${event.status === 'live' ? 'bg-red-500/20 text-red-400' :
                                event.status === 'upcoming' ? 'bg-blue-500/20 text-blue-400' :
                                    'bg-gray-500/20 text-gray-400'
                                }`}>
                                {event.status}
                            </span>
                        </div>
                        <p className="text-sm text-gray-400">{event.impact}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UMKMEventTrading