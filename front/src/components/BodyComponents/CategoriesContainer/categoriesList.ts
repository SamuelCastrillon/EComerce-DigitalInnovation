import {
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  CameraIcon,
  PrinterIcon,
} from "@heroicons/react/24/solid";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import LaptopDeviceIcone from "@/assets/icons/ProductsCategories/mdi--computer.svg";
import HeadphonesDeviceIcone from "@/assets/icons/ProductsCategories/mdi--headphones.svg";
import StorageDeviceIcone from "@/assets/icons/ProductsCategories/ssd.svg";
import AccessoriesDeviceIcone from "@/assets/icons/ProductsCategories/keyboard-mouse.svg";

export const categoriesList = [
  { id: 1, name: "Smartphones", iconeObject: DevicePhoneMobileIcon },
  { id: 2, name: "Laptops", iconeUrl: LaptopDeviceIcone.src },
  { id: 3, name: "Tablets", iconeObject: DeviceTabletIcon },
  { id: 4, name: "Headphones", iconeUrl: HeadphonesDeviceIcone.src },
  { id: 5, name: "Cameras", iconeObject: CameraIcon },
  { id: 6, name: "Printers", iconeObject: PrinterIcon },
  { id: 7, name: "Monitors", iconeObject: ComputerDesktopIcon },
  { id: 8, name: "Storage", iconeUrl: StorageDeviceIcone.src },
  { id: 9, name: "Accessories", iconeUrl: AccessoriesDeviceIcone.src },
];
