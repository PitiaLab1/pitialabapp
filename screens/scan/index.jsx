import { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Button, Container, HDiv, Text, VDiv } from "../../common/components";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StyleSheet, View } from "react-native";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import { theme } from "../../common/styles";
export const ScanRoute = "Scan";

export const Scan = () => {
  const downloadFile = async (uri) => {
    let fileUri = FileSystem.documentDirectory + uri.split("/").pop();

    try {
      const res = await FileSystem.downloadAsync(uri, fileUri);
      saveFile(res.uri);
    } catch (err) {
      console.log("FS Err: ", err);
    }
  };

  const saveFile = async (fileUri) => {
    const { status } = await MediaLibrary.getPermissionsAsync();
    if (status === "granted") {
      try {
        const asset = await MediaLibrary.createAssetAsync(fileUri);
        const album = await MediaLibrary.getAlbumAsync("Download");
        if (album == null) {
          await MediaLibrary.createAlbumAsync("Download", asset, false);
        } else {
          await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
        }
        alert("Imagem enviada para os Downloads!");
      } catch (err) {
        console.log("Save err: ", err);
      }
    }
  };

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(data);
    downloadFile(data);
  };

  const renderCamera = () => {
    return (
      <View style={styles.cameraContainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.camera}
        />
      </View>
    );
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Camera permission not granted</Text>
      </View>
    );
  }

  return (
    <Container>
      <VDiv p={"30px"} $center>
        {renderCamera()}
        <Text size={"18px"} m="0 0 20px 0">
          Clique no botão para escanear a figurinha!
        </Text>
        <Button
          w={"80px"}
          h={"80px"}
          radius="80px"
          onPress={() => setScanned(false)}
        >
          <HDiv h={"100%"} $center>
            <Icon name="camera-outline" size={48} />
          </HDiv>
        </Button>
      </VDiv>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 40,
  },
  cameraContainer: {
    width: "65%",
    height: "65%",
    aspectRatio: 3 / 4,
    overflow: "hidden",
    borderRadius: 10,
    marginBottom: 40,
    borderWidth: 2,
    borderColor: theme.colors.primary[2],
  },
  camera: {
    flex: 1,
  },
  button: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
