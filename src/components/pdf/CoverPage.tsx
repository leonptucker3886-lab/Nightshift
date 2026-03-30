import { Page, View, Text } from "@react-pdf/renderer";
import { colors, pageHeight, sharedStyles } from "./styles";

export default function CoverPage() {
  return (
    <Page size="LETTER" style={{ padding: 0, backgroundColor: colors.midnight }}>
      {/* Main background */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: pageHeight * 0.6,
          backgroundColor: colors.deepNavy,
        }}
      />

      {/* Left accent bar */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 6,
          height: pageHeight,
          backgroundColor: colors.teal,
        }}
      />

      {/* Top accent line */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          backgroundColor: colors.tealLight,
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
          paddingTop: 100,
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
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 16,
              paddingRight: 16,
              borderRadius: 12,
              marginBottom: 36,
            }}
          >
            <Text
              style={{
                fontSize: 8,
                fontFamily: "Helvetica-Bold",
                color: colors.white,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Printable PDF Bundle
            </Text>
          </View>

          {/* Moon icon */}
          <View
            style={{
              width: 90,
              height: 90,
              borderRadius: 45,
              borderWidth: 1.5,
              borderColor: "rgba(43,168,154,0.25)",
              marginBottom: 24,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: "rgba(43,168,154,0.08)",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 32, color: colors.tealLight }}>
                {"\u263E"}
              </Text>
            </View>
          </View>

          {/* Title */}
          <Text
            style={{
              fontSize: 36,
              fontFamily: "Helvetica-Bold",
              color: colors.white,
              lineHeight: 1.15,
              marginBottom: 6,
            }}
          >
            2026 Night Shift
          </Text>
          <Text
            style={{
              fontSize: 36,
              fontFamily: "Helvetica-Bold",
              color: colors.tealLight,
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            Nurse Survival Bundle
          </Text>

          {/* Divider */}
          <View
            style={{
              width: 50,
              height: 2,
              backgroundColor: colors.teal,
              marginBottom: 20,
              borderRadius: 1,
            }}
          />

          {/* Subtitles */}
          <Text
            style={{
              fontSize: 12,
              color: colors.oceanLight,
              lineHeight: 1.6,
              maxWidth: 380,
              marginBottom: 4,
            }}
          >
            Shift Scheduler · SBAR Handoff · Med Timeline
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: colors.oceanLight,
              lineHeight: 1.6,
              maxWidth: 380,
            }}
          >
            Fatigue Tracker · Sleep Recovery · Self-Care
          </Text>
        </View>

        {/* Bottom section */}
        <View>
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              marginBottom: 12,
            }}
          >
            <Text
              style={{
                fontSize: 9,
                color: "rgba(255,255,255,0.45)",
                letterSpacing: 0.5,
              }}
            >
              8 Printable Pages
            </Text>
            <Text
              style={{
                fontSize: 9,
                color: "rgba(255,255,255,0.3)",
              }}
            >
              |
            </Text>
            <Text
              style={{
                fontSize: 9,
                color: "rgba(255,255,255,0.45)",
                letterSpacing: 0.5,
              }}
            >
              12-Hour Night Shift RNs
            </Text>
            <Text
              style={{
                fontSize: 9,
                color: "rgba(255,255,255,0.3)",
              }}
            >
              |
            </Text>
            <Text
              style={{
                fontSize: 9,
                color: "rgba(255,255,255,0.45)",
                letterSpacing: 0.5,
              }}
            >
              Print Unlimited
            </Text>
          </View>
        </View>
      </View>

      {/* Decorative circles */}
      <View
        style={{
          position: "absolute",
          bottom: 50,
          right: 45,
          width: 130,
          height: 130,
          borderRadius: 65,
          borderWidth: 1,
          borderColor: "rgba(43,168,154,0.12)",
        }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 70,
          right: 65,
          width: 90,
          height: 90,
          borderRadius: 45,
          borderWidth: 0.75,
          borderColor: "rgba(43,168,154,0.08)",
        }}
      />

      {/* Stars */}
      {[
        { top: 110, right: 120, size: 2.5 },
        { top: 180, right: 220, size: 2 },
        { top: 90, right: 280, size: 3 },
        { top: 150, right: 370, size: 1.5 },
        { top: 200, right: 160, size: 2 },
        { top: 130, right: 420, size: 2 },
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

      {/* Stethoscope hint */}
      <Text
        style={{
          position: "absolute",
          bottom: 85,
          right: 80,
          fontSize: 24,
          color: "rgba(43,168,154,0.12)",
        }}
      >
        {"\u{1FA7A}"}
      </Text>
    </Page>
  );
}
