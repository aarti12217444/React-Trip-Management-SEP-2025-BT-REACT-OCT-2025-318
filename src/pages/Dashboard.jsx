import { useState, useEffect } from "react";
import TripList from "../components/TripList";
import SearchFilter from "../components/SearchFilter";
import Pagination from "../components/Pagination";
import { tripsData } from "../data/trips";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [trips, setTrips] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [tripsPerPage] = useState(2);
  const navigate = useNavigate();

  useEffect(() => {
    const savedTrips = JSON.parse(localStorage.getItem("trips")) || [];
    const newTrips = tripsData.filter(
      (trip) => !savedTrips.some((t) => t.id === trip.id)
    );
    const mergedTrips = [...savedTrips, ...newTrips];
    setTrips(mergedTrips);
    localStorage.setItem("trips", JSON.stringify(mergedTrips));
  }, []);

  const handleDelete = (id) => {
    const deletedTrip = trips.find((trip) => trip.id === id); // 👈 deleted trip find
    const updated = trips.filter((trip) => trip.id !== id);
    setTrips(updated);
    localStorage.setItem("trips", JSON.stringify(updated));

    if (deletedTrip) {
      toast.error(`${deletedTrip.destination} deleted from your dashboard ❌`);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const filteredTrips = trips
    .filter((trip) =>
      trip.destination.toLowerCase().includes(search.toLowerCase())
    )
    .filter((trip) => (filter === "" ? true : trip.status === filter));

  // 👇 Trigger "not found" toast only when search changes
  useEffect(() => {
    if (filteredTrips.length === 0 && search) {
      toast.warn(`No destination found for "${search}" 🔍`);
    }
  }, [filteredTrips, search]);

  const totalPages = Math.ceil(filteredTrips.length / tripsPerPage);
  const indexOfLast = currentPage * tripsPerPage;
  const indexOfFirst = indexOfLast - tripsPerPage;
  const currentTrips = filteredTrips.slice(indexOfFirst, indexOfLast);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(1);
  }, [filteredTrips, totalPages]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h2>

      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <TripList
          trips={currentTrips}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Dashboard;
