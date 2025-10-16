import { images } from "@/constants/images";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Bell } from 'lucide-react-native';

const greeting = "Good Morning";
const fullName = "DevPastey";


export default function Index() {
  return (
    <View className="pt-12 px-8 "
    >
      <View className="flex-row justify-between items-center">
        <View className="flex-row gap-2 items-center">
          <TouchableOpacity className="w-10 h-10">
            <Image source={images.profilePhoto} style={{ width: 40, height: 40, borderRadius: 28 }} resizeMode="cover" />
          </TouchableOpacity>
          <View>
            <Text className="text-xs">{greeting}</Text>
            <Text className="font-bold">{fullName}</Text>
          </View>
        </View>
        
        <View className="bg-gray-300 rounded-full w-10 h-10 justify-center items-center">
          <Bell />
        </View>
      </View>

      <View className="border-gray-300 border-4 border-solid w-full h-[8rem] mt-4 justify-center items-center rounded-2xl -skew-x-6 skew-y-8">
        <Text>$25.00</Text>
      </View>

    </View>
  );
}
