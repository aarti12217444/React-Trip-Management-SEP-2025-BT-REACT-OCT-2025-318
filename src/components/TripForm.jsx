import { useForm } from "react-hook-form";

const TripForm = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-4 space-y-4"
    >
      <div>
        <label>Destination</label>
        <input
          {...register("destination", { required: "Destination is required" })}
          className="border p-2 w-full rounded"
        />
        {errors.destination && (
          <p className="text-red-500">{errors.destination.message}</p>
        )}
      </div>

      <div>
        <label>Start Date</label>
        <input
          type="date"
          {...register("startDate", { required: "Start Date is required" })}
          className="border p-2 w-full rounded"
        />
        {errors.startDate && (
          <p className="text-red-500">{errors.startDate.message}</p>
        )}
      </div>

      <div>
        <label>End Date</label>
        <input
          type="date"
          {...register("endDate", { required: "End Date is required" })}
          className="border p-2 w-full rounded"
        />
        {errors.endDate && (
          <p className="text-red-500">{errors.endDate.message}</p>
        )}
      </div>

      <div>
        <label>Price ($)</label>
        <input
          type="number"
          {...register("price", { required: "Price is required", min: 0 })}
          className="border p-2 w-full rounded"
        />
        {errors.price && (
          <p className="text-red-500">{errors.price.message}</p>
        )}
      </div>

      <div>
        <label>Status</label>
        <select
          {...register("status", { required: "Status is required" })}
          className="border p-2 w-full rounded"
        >
          <option value="">Select Status</option>
          <option value="PLANNED">PLANNED</option>
          <option value="ONGOING">ONGOING</option>
          <option value="COMPLETED">COMPLETED</option>
        </select>
        {errors.status && (
          <p className="text-red-500">{errors.status.message}</p>
        )}
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default TripForm;
