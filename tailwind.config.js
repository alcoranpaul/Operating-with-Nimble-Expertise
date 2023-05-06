/*
 * File: tailwind.config.js
 * Project: Operating with Nimble Expertise
 * File Created: Friday, 5th May 2023 10:29:11 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 5th May 2023 10:46:45 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Tailwind CSS Configuration
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

