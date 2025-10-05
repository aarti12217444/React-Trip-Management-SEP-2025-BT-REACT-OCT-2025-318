const TripList = ({ trips, handleDelete, handleEdit }) => {
  return (
    <>
      {trips.map((trip) => (
        <div
          key={trip.id}
          className="bg-white shadow-md rounded-lg p-5 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            {trip.destination}
          </h3>
          <p className="text-gray-500 mb-1">
            {trip.startDate} - {trip.endDate}
          </p>
          <p className="text-gray-600 mb-1">Price: ${trip.price}</p>
          <p
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
              trip.status === "PLANNED"
                ? "bg-blue-100 text-blue-800"
                : trip.status === "ONGOING"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {trip.status}
          </p>

          <div className="mt-4 flex space-x-3">
            <button
              onClick={() => handleDelete(trip.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
            >
              Delete
            </button>
            <button
              onClick={() => handleEdit(trip.id)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TripList;
