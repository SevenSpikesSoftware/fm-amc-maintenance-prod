import { createTheme, alpha } from "@mui/material/styles";

const gold = {
  50: "#FBF6E8",
  100: "#F4E9C8",
  200: "#E9D79C",
  300: "#DCC377",
  400: "#C9A84C",
  500: "#B08F35",
  600: "#8F7228",
  700: "#6E571D",
  800: "#4C3C14",
  900: "#2E240C",
};

const maroon = {
  50: "#FAF2F3",
  100: "#F0DDE0",
  200: "#DFB8BE",
  300: "#C88C96",
  400: "#A2505E",
  500: "#6B1E2A",
  600: "#5A1723",
  700: "#47101A",
  800: "#340A12",
  900: "#21050A",
};

const sand = {
  0: "#FFFFFF",
  50: "#FDFBF6",
  100: "#F5ECD7",
  200: "#EADFC5",
  300: "#D8CBAD",
  400: "#B3A88D",
  500: "#877E67",
  600: "#5C554A",
  700: "#423D34",
  800: "#29251F",
  900: "#1A1714",
};
const shadow = {
  xs: "0 1px 2px rgba(26, 23, 20, 0.06)",
  sm: "0 1px 3px rgba(26, 23, 20, 0.08), 0 1px 2px rgba(26, 23, 20, 0.04)",
  md: "0 4px 12px rgba(26, 23, 20, 0.10), 0 1px 3px rgba(26, 23, 20, 0.05)",
  lg: "0 12px 32px rgba(26, 23, 20, 0.14), 0 2px 8px rgba(26, 23, 20, 0.07)",
};
const theme = createTheme({
  shape: {
    borderRadius: 10,
  },

  palette: {
    mode: "light",

    primary: {
      light: gold[300],
      main: gold[400],
      dark: gold[600],
      contrastText: sand[900],
    },

    secondary: {
      light: maroon[400],
      main: maroon[500],
      dark: maroon[700],
      contrastText: "#FFFFFF",
    },

    error: { main: "#af2613", light: "#C85B48", dark: "#6E2117" },
    warning: { main: "#B26A00", light: "#E08C1A", dark: "#7D4A00" },
    success: { main: "#506e1b", light: "#7C8F57", dark: "#3E4A2A" },
    info: { main: "#2e7196", light: "#7C97A3", dark: "#3C505A" },

    background: {
      default: sand[100],
      paper: sand[0],
    },

    text: {
      primary: sand[900],
      secondary: sand[600],
      disabled: sand[400],
    },

    divider: alpha(sand[900], 0.12),

    gold,
    maroon,
    sand,
  },

  typography: {
    button: { fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          "&:hover": { backgroundColor: gold[500] },
        },
        containedSecondary: {
          "&:hover": { backgroundColor: maroon[600] },
        },
        outlinedPrimary: {
          color: gold[700],
          borderColor: alpha(gold[600], 0.5),
          "&:hover": {
            borderColor: gold[600],
            backgroundColor: alpha(gold[400], 0.1),
          },
        },
        textPrimary: {
          color: gold[700],
          "&:hover": { backgroundColor: alpha(gold[400], 0.12) },
        },
        outlinedSecondary: {
          borderColor: alpha(maroon[500], 0.4),
          "&:hover": {
            borderColor: maroon[500],
            backgroundColor: alpha(maroon[500], 0.06),
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: sand[0],
          "&.Mui-focused fieldset": {
            borderWidth: 2,
            borderColor: maroon[500],
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 2.5,
          borderRadius: 2,
          backgroundColor: maroon[500],
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": { color: maroon[500] },
        },
      },
    },

    MuiLink: {
      defaultProps: { underline: "hover" },
      styleOverrides: {
        root: { color: maroon[500], fontWeight: 500 },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: { backgroundImage: "none" },
        outlined: { borderColor: alpha(sand[900], 0.12) },
      },
    },

    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          border: `1px solid ${alpha(sand[900], 0.1)}`,
          borderRadius: 12,
          boxShadow: shadow.sm,
          backgroundImage: "none",
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: { borderColor: alpha(sand[900], 0.09) },
        head: {
          fontWeight: 700,
          fontSize: "0.75rem",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: sand[600],
          backgroundColor: sand[50],
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontSize: "0.875rem",
          alignItems: "center",
          border: `1px solid ${alpha(sand[900], 0.1)}`,
          boxShadow: shadow.xs,
        },
      },
    },
  },
});

export default theme;
