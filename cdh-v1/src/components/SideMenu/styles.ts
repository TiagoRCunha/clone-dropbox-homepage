import { styled } from '@material-ui/core'

export const Container = styled("div")(({ theme }) => ({
  lineHeight: "1.16rem",
  zIndex: 10,
  position: "fixed",
  top: 0,
  right: 0,
  width: "100%",
  height: "100%",
  background: theme.palette.tertiary.main,
  "@media (min-width: 1024px)": {
    width: "calc(100% / 3)",
    boxShadow: "-7px 0 5px -6px rgba(0, 0, 0, 0.075)",
    "&.scrollOpen": {
      transform: "translateX(0)",
    },
    "&.scrollOpen .action--close": {
      display: "none",
    },
  },
  "@media (min-width: 1440px)": {
    width: "calc(480px + ((100vw - 1440px) / 2))",
    boxShadow: "-7px 0 5px -6px rgba(0, 0, 0, 0.075)",
  },
  transform: "translateX(100%)",
  transition: "0.5s transform cubic-bezier(0.5, 0, 0, 1)",
  "&.open": {
    transform: "translateX(0)",
  },
}));
