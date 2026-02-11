/**
 * Flutter WebP Asset Exporter - Helpers
 * 
 * HOW TO RUN THIS EXPORTER:
 * -------------------------
 * This exporter is designed to be used within the Supernova platform.
 * It cannot be run as a standalone script. To use it:
 * 
 * 1. Install the exporter in your Supernova workspace:
 *    - Go to your Supernova design system workspace
 *    - Navigate to Exporters section
 *    - Install this Flutter WebP Asset Exporter
 * 
 * 2. Configure your brand and asset sources:
 *    - Select the brand to export from
 *    - Configure asset sources in sources.json (if needed)
 * 
 * 3. Run the exporter:
 *    - Click "Run Exporter" in the Supernova UI
 *    - Or use the Supernova CLI: `supernova run-exporter <exporter-id>`
 * 
 * 4. Output structure:
 *    - Assets are exported following the structure defined in output.json
 *    - Paths are generated using the asset_path_flutter.pr blueprint
 *    - Result: /icons/group_name/icon_name.webp
 * 
 * CUSTOMIZATION:
 * --------------
 * - Modify asset_path_flutter.pr to change naming conventions
 * - Update output.json to change asset formats (e.g. webp, png) or scales
 * - Add custom helper functions below for advanced transformations
 * 
 * For more information: https://developers.supernova.io/
 * 
 * ---
 * 
 * Helpers are empty for now. All path generation for this exporter 
 * is done purely through the path blueprint (asset_path_flutter.pr).
 */