import { useNavigate, useParams } from "react-router-dom";
import TripForm from "../components/TripForm";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const AddTrip = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // get id from URL
  const [defaultValues, setDefaultValues] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    price: "",
    status: "PLANNED",
  });

  useEffect(() => {
    if (id) {
      const savedTrips = JSON.parse(localStorage.getItem("trips")) || [];
      const tripToEdit = savedTrips.find((t) => t.id === parseInt(id));
      if (tripToEdit) setDefaultValues(tripToEdit); // pre-fill form
    }
  }, [id]);

  const onSubmit = (data) => {
    const savedTrips = JSON.parse(localStorage.getItem("trips")) || [];

    if (id) {
    
      const updatedTrips = savedTrips.map((t) =>
        t.id === parseInt(id) ? { ...t, ...data } : t
      );
      localStorage.setItem("trips", JSON.stringify(updatedTrips));
        toast.info(`${data.destination} updated in your dashboard ✏️`);
    } else {

      data.id = savedTrips.length + 1;
      savedTrips.push(data);
      localStorage.setItem("trips", JSON.stringify(savedTrips));
       toast.success(`${data.destination} added to your trip dashboard 🚀`);
    }

    navigate("/"); 
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">
        {id ? "Edit Trip" : "Add Trip"}
      </h2>
      <TripForm onSubmit={onSubmit} defaultValues={defaultValues} />
    </div>
  );
};

export default AddTrip;
