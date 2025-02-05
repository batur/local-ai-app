import { Text, View } from "react-native";

import { format } from "date-fns";

export default function Index() {
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
    </View>
  );
}
