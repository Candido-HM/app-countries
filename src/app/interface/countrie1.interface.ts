export interface Countrie {
    currencies?: {
        [key: string]: {
          name: string;
          symbol: string;
        };
      };
    languages?: {
      key: string; 
    };
}