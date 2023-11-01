interface AllMenuItemsProps {
  label: string;
  linkTo: string;
  selectedOptionKey: string;
  dropDownMenu?: Array<dropDownProps>;
}

export interface dropDownProps {
  label: string;
  linkTo: string;
  selectedOptionKey: string;
}

export const TOP_HEADER_ROUTE = {
  HOME: "/",
  CART: "/cart",
  LOGIN: "/login",
};

export const HEADER_ROUTE = {
  EMBROIDERY_DESIGNS: "/embroidery-designs",
  EMBROIDERY_PATCHES: "/embroidery-patches",
  VECTOR_DESIGNS: "/victor-design",
  SILHOUETTE_ART: "/silhouette-art",
  STENCIL_ART: "/stencil-art",
  CUSTOMIZATION_REQUEST: "/customization-request",
};

export const AllMenusItems: Array<AllMenuItemsProps> = [
  {
    label: "Embroidery Designs",
    linkTo: HEADER_ROUTE.EMBROIDERY_DESIGNS,
    selectedOptionKey: HEADER_ROUTE.EMBROIDERY_DESIGNS,
    dropDownMenu: [
      {
        label: "Dummy 1",
        linkTo: "/categoryproducts",
        selectedOptionKey: "/categoryproducts",
      },
      {
        label: "Dummy 2",
        linkTo: "/categoryproducts",
        selectedOptionKey: "/categoryproducts",
      },
      {
        label: "Dummy 3",
        linkTo: "/categoryproducts",
        selectedOptionKey: "/categoryproducts",
      },
      {
        label: "Dummy 4",
        linkTo: "/categoryproducts",
        selectedOptionKey: "/categoryproducts",
      },
      {
        label: "Dummy 5",
        linkTo: "/categoryproducts",
        selectedOptionKey: "/categoryproducts",
      },
      {
        label: "Dummy 6",
        linkTo: "/categoryproducts",
        selectedOptionKey: "/categoryproducts",
      },
      {
        label: "Dummy 7",
        linkTo: "/categoryproducts",
        selectedOptionKey: "/categoryproducts",
      },
      {
        label: "Dummy 8",
        linkTo: "/categoryproducts",
        selectedOptionKey: "/categoryproducts",
      },
      {
        label: "Dummy 9",
        linkTo: "/categoryproducts",
        selectedOptionKey: "/categoryproducts",
      },
      {
        label: "Dummy 10",
        linkTo: "/categoryproducts",
        selectedOptionKey: "/categoryproducts",
      },
      {
        label: "Dummy 11",
        linkTo: "/categoryproducts",
        selectedOptionKey: "/categoryproducts",
      },
      {
        label: "Dummy 12",
        linkTo: "/categoryproducts",
        selectedOptionKey: "/categoryproducts",
      },
    ],
  },
  {
    label: "Embroidery Patches",
    linkTo: HEADER_ROUTE.EMBROIDERY_PATCHES,
    selectedOptionKey: HEADER_ROUTE.EMBROIDERY_PATCHES,
    dropDownMenu: [
      {
        label: "Dummy 13",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 14",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 15",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 16",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 17",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 18",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 19",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 20",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 21",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 22",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 23",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 24",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
    ],
  },
  {
    label: "Victory Designs",
    linkTo: HEADER_ROUTE.VECTOR_DESIGNS,
    selectedOptionKey: HEADER_ROUTE.VECTOR_DESIGNS,
    dropDownMenu: [
      {
        label: "Dummy 13",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 14",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 15",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 16",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 17",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 18",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 19",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 20",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 21",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 22",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 23",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 24",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
    ],
  },
  {
    label: "Silhouette Art",
    linkTo: HEADER_ROUTE.SILHOUETTE_ART,
    selectedOptionKey: HEADER_ROUTE.SILHOUETTE_ART,
    dropDownMenu: [
      {
        label: "Dummy 13",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 14",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 15",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 16",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 17",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 18",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 19",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 20",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 21",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 22",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 23",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 24",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
    ],
  },
  {
    label: "Stencil Art",
    linkTo: HEADER_ROUTE.STENCIL_ART,
    selectedOptionKey: HEADER_ROUTE.STENCIL_ART,
    dropDownMenu: [
      {
        label: "Dummy 13",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 14",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 15",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 16",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 17",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 18",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 19",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 20",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 21",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 22",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 23",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 24",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
    ],
  },
  {
    label: "Customization Request",
    linkTo: HEADER_ROUTE.CUSTOMIZATION_REQUEST,
    selectedOptionKey: HEADER_ROUTE.CUSTOMIZATION_REQUEST,
    dropDownMenu: [
      {
        label: "Dummy 13",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 14",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 15",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 16",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 17",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 18",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 19",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 20",
        linkTo: "/categories",
        selectedOptionKey: "/dummy20",
      },
      {
        label: "Dummy 21",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 22",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 23",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
      {
        label: "Dummy 24",
        linkTo: "/categories",
        selectedOptionKey: "/categories",
      },
    ],
  },
];

export const FooterAllMenusItems: Array<AllMenuItemsProps> = [];
