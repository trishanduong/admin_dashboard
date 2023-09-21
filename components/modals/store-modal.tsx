"use client";
//global imports
import { useStoreModal } from "@/hooks/use-store-modal";
//local imports
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <div>
      <Modal
        title="Create Store"
        description="Add a new store to manage products and categories"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}
      >
        Future Store Create Form
      </Modal>
    </div>
  );
};
