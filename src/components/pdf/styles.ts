import { StyleSheet } from "@react-pdf/renderer";

export const colors = {
  midnight: "#0F1B2D",
  deepNavy: "#162A45",
  slate: "#1E3A5F",
  teal: "#1A7A6D",
  tealLight: "#2BA89A",
  tealPale: "#D0F0EC",
  ocean: "#1B6B93",
  oceanLight: "#4A9CC7",
  ice: "#E8F4F8",
  warmOrange: "#E8943A",
  warmOrangePale: "#FFF3E0",
  coral: "#E07C5A",
  softGreen: "#4CAF7D",
  softGreenPale: "#E8F5E9",
  lavender: "#7E6BA1",
  lavenderPale: "#F0EAF5",
  gold: "#D4A843",
  textDark: "#1A1A2E",
  textMid: "#4A4A6A",
  textLight: "#8A8AA0",
  white: "#FFFFFF",
  offWhite: "#F8FAFB",
  lightGray: "#E8ECF0",
  mediumGray: "#C0C8D0",
};

export const pageWidth = 612;
export const pageHeight = 792;
export const margin = 40;

export const sharedStyles = StyleSheet.create({
  page: {
    padding: margin,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: colors.textDark,
    backgroundColor: colors.white,
  },
  pageTitle: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: colors.deepNavy,
    marginBottom: 4,
  },
  pageSubtitle: {
    fontSize: 11,
    color: colors.textMid,
    fontFamily: "Helvetica",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    color: colors.slate,
    marginBottom: 6,
    marginTop: 10,
  },
  smallLabel: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: colors.textMid,
    textTransform: "uppercase" as const,
    letterSpacing: 0.5,
  },
  line: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.lightGray,
    marginTop: 2,
    marginBottom: 2,
  },
  checkbox: {
    width: 10,
    height: 10,
    borderWidth: 1,
    borderColor: colors.mediumGray,
    borderRadius: 1,
    marginRight: 5,
    flexShrink: 0,
  },
  row: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
  },
  footer: {
    position: "absolute" as const,
    bottom: 25,
    left: margin,
    right: margin,
    flexDirection: "row" as const,
    justifyContent: "space-between" as const,
    alignItems: "center" as const,
  },
  footerText: {
    fontSize: 7,
    color: colors.textLight,
    fontFamily: "Helvetica",
  },
  headerBadge: {
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    color: colors.teal,
    backgroundColor: colors.tealPale,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 3,
    textTransform: "uppercase" as const,
    letterSpacing: 0.8,
  },
});
