import WordCounter from '../../components/tools/WordCounter.astro';
import JsonFormatter from '../../components/tools/JsonFormatter.astro';
import ImageCompressor from '../../components/tools/ImageCompressor.astro';
import Base64Converter from '../../components/tools/Base64Converter.astro';
import HashGenerator from '../../components/tools/HashGenerator.astro';
import UrlSlugConverter from '../../components/tools/UrlSlugConverter.astro';

export const TOOL_REGISTRY: Record<string, any> = {
  'word-counter': WordCounter,
  'json-formatter': JsonFormatter,
  'image-compressor': ImageCompressor,
  'base64-converter': Base64Converter,
  'hash-generator': HashGenerator,
  'url-slug-converter': UrlSlugConverter,
};

export function getToolComponent(id: string) {
  return TOOL_REGISTRY[id] || null;
}
