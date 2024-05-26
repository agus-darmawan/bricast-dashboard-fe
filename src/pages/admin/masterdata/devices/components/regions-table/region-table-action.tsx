import PopupModal from '@/components/shared/popup-modal';
import RegionCreateForm from '../regions-form/region-create-form';

export default function RegionTableActions({ zones }: any) {
  return (
    <div className=" ml-auto flex items-center justify-end py-5">
      <div className="flex gap-3">
        <PopupModal
          renderModal={(onClose) => (
            <RegionCreateForm modalClose={onClose} zones={zones} />
          )}
        />
      </div>
    </div>
  );
}
