import RightArrow from '@/assets/all-eagle-svg-files/rightArrow';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbExample() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <RightArrow />
      <Breadcrumb.Item active>Embroidery Designs</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbExample;