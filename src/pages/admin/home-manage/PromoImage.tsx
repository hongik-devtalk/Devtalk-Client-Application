import AdminImageUpload from '../../../components/admin/upload/AdminImageUpload';
import AdminPresentationUpload from '../../../components/admin/upload/AdminPresentationUpload';
const PromoImage = () => {
  return (
    <div>
      <h1>홍보사진관리</h1>
      <AdminImageUpload
        title="Devtalk 소개 사진"
        onUpload={(files) => console.log('이미지 업로드:', files)}
        onRemove={(index) => console.log('이미지 삭제:', index)}
      />
      <AdminPresentationUpload
        onUpload={(files) => console.log('발표자료 업로드:', files)}
        onRemove={(index) => console.log('발표자료 삭제:', index)}
      />
    </div>
  );
};

export default PromoImage;
