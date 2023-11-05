// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    screen: {
      desktop: number;
      mobile: number;
      tablet: number;
    };
  }
}
