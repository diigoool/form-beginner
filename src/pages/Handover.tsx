import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { HandoverRequest } from "../types/Handover";
import HandoverTable from "../components/HandoverTable";
import HandoverForm from "../components/HandoverForm";

const Handover = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedHandover, setSelectedHandover] =
    useState<HandoverRequest | null>(null);
  const [handoverRequests, setHandoverRequests] = useState<HandoverRequest[]>([
    { id: 1, requestId: "REQ12345", user: "John Doe", assignTo: "Jane Smith" },
    {
      id: 2,
      requestId: "REQ12346",
      user: "Jane Smith",
      assignTo: "Robert Brown",
    },
  ]);

  // Toggle modal untuk tambah/edit handover
  const handleModalToggle = () => {
    setShowModal((prev) => !prev);
    setSelectedHandover(null); // Reset data saat modal ditutup
  };

  // Menangani edit
  const handleEdit = (handover: HandoverRequest) => {
    setSelectedHandover(handover);
    setShowModal(true);
  };

  // Menangani hapus
  const handleDelete = (handoverId: number) => {
    setHandoverRequests(
      handoverRequests.filter((handover) => handover.id !== handoverId)
    );
  };

  // Menangani submit form untuk tambah/edit handover
  const handleSubmitHandover: SubmitHandler<HandoverRequest> = (data) => {
    if (selectedHandover) {
      setHandoverRequests((prev) =>
        prev.map((handover) =>
          handover.id === selectedHandover.id
            ? { ...data, id: selectedHandover.id }
            : handover
        )
      );
    } else {
      setHandoverRequests([
        ...handoverRequests,
        { ...data, id: handoverRequests.length + 1 },
      ]);
    }
    setShowModal(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Handover Page</h2>
      <p className="text-gray-700 mb-6">
        Manage and track handover requests below.
      </p>

      {/* Tombol Tambah Handover */}
      <button
        onClick={() => handleModalToggle()}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600 cursor-pointer"
      >
        Add Handover Request
      </button>

      {/* Tabel Handover */}
      <HandoverTable
        handoverRequests={handoverRequests}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Modal untuk Tambah/Edit Handover */}
      {showModal && (
        <HandoverForm
          isEditing={selectedHandover !== null}
          handoverData={selectedHandover}
          onClose={handleModalToggle}
          onSubmit={handleSubmitHandover}
        />
      )}
    </div>
  );
};

export default Handover;
