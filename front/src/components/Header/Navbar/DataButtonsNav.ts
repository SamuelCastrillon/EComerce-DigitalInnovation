export interface IDataButtons {
  name: string;
  url: string;
  icone: string;
}

export const NavDataUserSignIn: IDataButtons[] = [
  { name: "DashBoard", url: "/dashboard", icone: "" },
  { name: "Cart", url: "/dashboard/cart", icone: "" },
  { name: "Sign Out", url: "/home", icone: "" },
];
export const NavDataUserSignOut: IDataButtons[] = [
  { name: "Sign in", url: "/signIn", icone: "" },
  { name: "Create Acount", url: "/createAccount", icone: "" },
];
