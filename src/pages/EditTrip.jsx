import { useParams, useNavigate } from "react-router-dom";
import TripForm from "../components/TripForm";
import { tripsData } from "../data/trips";
import { toast } from "react-toastify";

const EditTrip = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const trip = tripsData.find(t => t.id === parseInt(id));

  const onSubmit = (data) => {
    const index = tripsData.findIndex(t => t.id === parseInt(id));
    tripsData[index] = { ...data, id: parseInt(id) };
      toast.info(`${data.destination} updated in your dashboard ✏️`);
    navigate("/");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Edit Trip</h2>
      <TripForm onSubmit={onSubmit} defaultValues={trip} />
    </div>
  );
};

export default EditTrip;
