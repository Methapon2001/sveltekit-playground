import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerCompileClass,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  transformers: [transformerVariantGroup(), transformerCompileClass()],
});
