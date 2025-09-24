import AdminImageUpload from '../../../components/admin/AdminImageUpload';

const PromoImage = () => {
  return (
    <div>
      <h1>홍보사진관리</h1>
      <AdminImageUpload
        title="Devtalk 소개 사진"
        onUpload={(file) => console.log('소개사진 업로드:', file)}
        onRemove={() => console.log('소개사진 삭제')}
      />
    </div>
  );
};

export default PromoImage;
