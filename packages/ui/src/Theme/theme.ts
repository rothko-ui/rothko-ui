import { ColorOverrideMap, greyScale, LightnessMap, Theme } from './types';

/* Later create json override file that merges w base */
export const baseOverrides: ColorOverrideMap = {
  primary: {
    text: greyScale.black,
  },
  secondary: {
    text: greyScale.white,
  },
  info: {
    text: greyScale.white,
  },
  success: {
    text: greyScale.white,
  },
  warning: {
    text: greyScale.black,
  },
  danger: {
    text: greyScale.white,
  },
  basic: {
    text: greyScale.black,
  },
};

export const lightnessMap: LightnessMap = {
  'bg:active': 600,
  'bg:focus': 600,
  'bg:disabled': 'transparent-500',
  'bg:hover': 600,
  'border:active': 500,
  'border:focus': 500,
  'border:disabled': 'transparent-500',
  'border:hover': 500,
};

export const theme: Theme = {
  'primary-100': '#F7FFF4',
  'primary-200': '#EDFFEA',
  'primary-300': '#E2FFDF',
  'primary-400': '#D8FFD8',
  'primary-500': '#CBFFD0',
  'primary-600': '#94DBA1',
  'primary-700': '#66B77C',
  'primary-800': '#40935F',
  'primary-900': '#267A4D',
  'primary-transparent-100': 'rgba(203, 255, 208, 0.08)',
  'primary-transparent-200': 'rgba(203, 255, 208, 0.16)',
  'primary-transparent-300': 'rgba(203, 255, 208, 0.24)',
  'primary-transparent-400': 'rgba(203, 255, 208, 0.32)',
  'primary-transparent-500': 'rgba(203, 255, 208, 0.4)',
  'primary-transparent-600': 'rgba(203, 255, 208, 0.48)',
  'secondary-100': '#CAC2F3',
  'secondary-200': '#998BE8',
  'secondary-300': '#5A4ABA',
  'secondary-400': '#281D75',
  'secondary-500': '#03001A',
  'secondary-600': '#020016',
  'secondary-700': '#010012',
  'secondary-800': '#01000F',
  'secondary-900': '#00000C',
  'secondary-transparent-100': 'rgba(3, 0, 26, 0.08)',
  'secondary-transparent-200': 'rgba(3, 0, 26, 0.16)',
  'secondary-transparent-300': 'rgba(3, 0, 26, 0.24)',
  'secondary-transparent-400': 'rgba(3, 0, 26, 0.32)',
  'secondary-transparent-500': 'rgba(3, 0, 26, 0.4)',
  'secondary-transparent-600': 'rgba(3, 0, 26, 0.48)',
  'success-100': '#E7F9D2',
  'success-200': '#CCF4A8',
  'success-300': '#A1DF76',
  'success-400': '#75C04F',
  'success-500': '#409621',
  'success-600': '#2C8118',
  'success-700': '#1C6C10',
  'success-800': '#0E570A',
  'success-900': '#064807',
  'success-transparent-100': 'rgba(64, 150, 33, 0.08)',
  'success-transparent-200': 'rgba(64, 150, 33, 0.16)',
  'success-transparent-300': 'rgba(64, 150, 33, 0.24)',
  'success-transparent-400': 'rgba(64, 150, 33, 0.32)',
  'success-transparent-500': 'rgba(64, 150, 33, 0.4)',
  'success-transparent-600': 'rgba(64, 150, 33, 0.48)',
  /*
  'info-100': '#DADEFF',
  'info-200': '#B5BDFF',
  'info-300': '#909BFF',
  'info-400': '#7581FF',
  'info-500': '#4756FF',
  'info-600': '#3340DB',
  'info-700': '#232DB7',
  'info-800': '#161D93',
  'info-900': '#0D127A',
  'info-transparent-100': 'rgba(71, 86, 255, 0.08)',
  'info-transparent-200': 'rgba(71, 86, 255, 0.16)',
  'info-transparent-300': 'rgba(71, 86, 255, 0.24)',
  'info-transparent-400': 'rgba(71, 86, 255, 0.32)',
  'info-transparent-500': 'rgba(71, 86, 255, 0.4)',
  'info-transparent-600': 'rgba(71, 86, 255, 0.48)',
  */
  'info-100': '#D9D2F8',
  'info-200': '#B4A8F1',
  'info-300': '#8375D5',
  'info-400': '#584BAC',
  'info-500': '#281D75',
  'info-600': '#1E1564',
  'info-700': '#150E54',
  'info-800': '#0E0943',
  'info-900': '#090538',
  'info-transparent-100': 'rgba(40, 29, 117, 0.08)',
  'info-transparent-200': 'rgba(40, 29, 117, 0.16)',
  'info-transparent-300': 'rgba(40, 29, 117, 0.24)',
  'info-transparent-400': 'rgba(40, 29, 117, 0.32)',
  'info-transparent-500': 'rgba(40, 29, 117, 0.4)',
  'info-transparent-600': 'rgba(40, 29, 117, 0.48)',
  'warning-100': '#FFF7CC',
  'warning-200': '#FFEC99',
  'warning-300': '#FFDE66',
  'warning-400': '#FFD13F',
  'warning-500': '#FFBB00',
  'warning-600': '#DB9A00',
  'warning-700': '#B77C00',
  'warning-800': '#936000',
  'warning-900': '#7A4C00',
  'warning-transparent-100': 'rgba(255, 187, 0, 0.08)',
  'warning-transparent-200': 'rgba(255, 187, 0, 0.16)',
  'warning-transparent-300': 'rgba(255, 187, 0, 0.24)',
  'warning-transparent-400': 'rgba(255, 187, 0, 0.32)',
  'warning-transparent-500': 'rgba(255, 187, 0, 0.4)',
  'warning-transparent-600': 'rgba(255, 187, 0, 0.48)',
  'danger-100': '#FDE3D5',
  'danger-200': '#FCC1AC',
  'danger-300': '#F89782',
  'danger-400': '#F26F62',
  'danger-500': '#EA3131',
  'danger-600': '#C92332',
  'danger-700': '#A81831',
  'danger-800': '#870F2E',
  'danger-900': '#70092D',
  'danger-transparent-100': 'rgba(234, 49, 49, 0.08)',
  'danger-transparent-200': 'rgba(234, 49, 49, 0.16)',
  'danger-transparent-300': 'rgba(234, 49, 49, 0.24)',
  'danger-transparent-400': 'rgba(234, 49, 49, 0.32)',
  'danger-transparent-500': 'rgba(234, 49, 49, 0.4)',
  'danger-transparent-600': 'rgba(234, 49, 49, 0.48)',
  'basic-100': '#F5F8FD',
  'basic-200': '#EBF2FB',
  'basic-300': '#DEE7F5',
  'basic-400': '#D0D9EB',
  'basic-500': '#BCC7DF',
  'basic-600': '#8998BF',
  'basic-700': '#5E6FA0',
  'basic-800': '#3B4B81',
  'basic-900': '#24316B',
  'basic-transparent-100': 'rgba(188, 199, 223, 0.08)',
  'basic-transparent-200': 'rgba(188, 199, 223, 0.16)',
  'basic-transparent-300': 'rgba(188, 199, 223, 0.24)',
  'basic-transparent-400': 'rgba(188, 199, 223, 0.32)',
  'basic-transparent-500': 'rgba(188, 199, 223, 0.4)',
  'basic-transparent-600': 'rgba(188, 199, 223, 0.48)',
} as const;

export default theme;
