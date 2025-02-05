import { Text, TouchableOpacity, View } from "react-native";

import { format } from "date-fns";
import { bearStore } from "stores";
import { useLocale } from "hooks";

export default function Index() {
  const { bears, increase, reset } = bearStore();
  const { t } = useLocale();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>{format(new Date(), "dd/MM/yyyy")}</Text>
      <Text>{bears}</Text>
      <TouchableOpacity
        onPress={() => increase(1)}
        style={{ padding: 8, backgroundColor: "lightblue" }}
      >
        <Text>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={reset} style={{ padding: 8, backgroundColor: "lightcoral" }}>
        <Text>Reset</Text>
      </TouchableOpacity>
      <Text>
        {t("welcome", {
          name: "Batur",
        })}
      </Text>
    </View>
  );
}
