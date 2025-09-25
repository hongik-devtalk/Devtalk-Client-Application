import React from 'react';
import AdminFileUpload from './AdminFileUpload';

interface AdminPresentationUploadProps {
  onUpload: (files: File[]) => void;
  onRemove: (index: number) => void;
}

const AdminPresentationUpload: React.FC<AdminPresentationUploadProps> = ({
  onUpload,
  onRemove,
}) => {
  return (
    <AdminFileUpload
      accept=".pdf,.ppt,.pptx,image/*"
      maxFiles={10}
      onUpload={onUpload}
      onRemove={onRemove}
    />
  );
};

export default AdminPresentationUpload;
