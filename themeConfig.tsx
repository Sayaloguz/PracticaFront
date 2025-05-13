import { ThemeConfig } from "antd";

const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: "#ef4444",
    borderRadius: 6,
    colorText: "#333",
  },
  components: {
    Breadcrumb: {
      itemColor: "#ef4444",
      lastItemColor: "#333",
      separatorColor: "#333",
      linkHoverColor: "#ef4444",
      separatorMargin: 10,
    },
    Form: {
      fontSize: 15,
    },
  },
};

export default themeConfig;
/*
  components: {
    Button: {
      colorPrimary: "#1890ff",
      algorithm: true, // Habilita sobreescritura para este componente
    } /*
    Input: {
      colorPrimary: "#1890ff",
      activeBorderColor: "#1890ff",
      hoverBorderColor: "#40a9ff",
    },
    Table: {
      headerBg: "#fafafa",
      headerColor: "#333",
    },
  },*/
