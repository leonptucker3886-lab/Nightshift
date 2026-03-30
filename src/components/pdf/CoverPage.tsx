import { Page, View, Text } from "@react-pdf/renderer";
import { colors, pageWidth, pageHeight, sharedStyles } from "./styles";

export default function CoverPage() {
  return (
    <Page size="LETTER" style={{ padding: 0, backgroundColor: colors.midnight }}>
      {/* Top gradient band */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: pageHeight * 0.55,
          backgroundColor: colors.deepNavy,
        }}
      />

      {/* Teal accent stripe */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 8,
          height: pageHeight,
          backgroundColor: colors.teal,
        }}
      />

      {/* Content */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          padding: 60,
          paddingTop: 90,
          justifyContent: "space-between",
        }}
      >
        {/* Top section */}
        <View>
          {/* Badge */}
          <View
            style={{
              backgroundColor: colors.teal,
              alignSelf: "flex-start",
              padding: "5 14",
              borderRadius: 3,
              marginBottom: 30,
            }}
          >
            <Text
              style={{
                fontSize: 8,
                fontFamily: "Helvetica-Bold",
                color: colors.white,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              Printable PDF Bundle
            </Text>
          </View>

          {/* Moon illustration (simple circle) */}
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: "rgba(255,255,255,0.08)",
              marginBottom: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: "rgba(255,255,255,0.12)",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 28 }}>{"\u263E"}</Text>
            </View>
          </View>

          {/* Title */}
          <Text
            style={{
              fontSize: 32,
              fontFamily: "Helvetica-Bold",
              color: colors.white,
              lineHeight: 1.2,
              marginBottom: 8,
            }}
          >
            2026 Night Shift
          </Text>
          <Text
            style={{
              fontSize: 32,
              fontFamily: "Helvetica-Bold",
              color: colors.tealLight,
              lineHeight: 1.2,
              marginBottom: 14,
            }}
          >
            Nurse Survival Bundle
          </Text>

          {/* Subtitle */}
          <Text
            style={{
              fontSize: 13,
              color: colors.oceanLight,
              lineHeight: 1.5,
              maxWidth: 360,
              marginBottom: 20,
            }}
          >
            Shift Scheduler - SBAR Handoff - Med Timeline
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: colors.oceanLight,
              lineHeight: 1.5,
              maxWidth: 360,
            }}
          >
            Fatigue Tracker - Sleep Recovery - Self-Care
          </Text>
        </View>

        {/* Bottom section */}
        <View>
          {/* Divider */}
          <View
            style={{
              height: 1,
              backgroundColor: colors.teal,
              width: 60,
              marginBottom: 16,
            }}
          />

          <Text
            style={{
              fontSize: 9,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: 0.5,
            }}
          >
            8 Printable Pages | Designed for 12-Hour Night Shift RNs
          </Text>
          <Text
            style={{
              fontSize: 9,
              color: "rgba(255,255,255,0.3)",
              letterSpacing: 0.5,
              marginTop: 4,
            }}
          >
            Print unlimited copies or use on your tablet
          </Text>
        </View>
      </View>

      {/* Stethoscope-inspired decorative elements */}
      <View
        style={{
          position: "absolute",
          bottom: 60,
          right: 50,
          width: 120,
          height: 120,
          borderRadius: 60,
          borderWidth: 1.5,
          borderColor: "rgba(43,168,154,0.15)",
        }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 80,
          right: 70,
          width: 80,
          height: 80,
          borderRadius: 40,
          borderWidth: 1,
          borderColor: "rgba(43,168,154,0.1)",
        }}
      />

      {/* Stars / dots */}
      {[
        { top: 120, right: 100, size: 3 },
        { top: 200, right: 200, size: 2 },
        { top: 80, right: 250, size: 2.5 },
        { top: 160, right: 350, size: 2 },
        { top: 100, right: 180, size: 1.5 },
      ].map((dot, i) => (
        <View
          key={i}
          style={{
            position: "absolute",
            top: dot.top,
            right: dot.right,
            width: dot.size,
            height: dot.size,
            borderRadius: dot.size / 2,
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        />
      ))}
    </Page>
  );
}
