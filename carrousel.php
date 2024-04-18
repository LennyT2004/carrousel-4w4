<?php
/**
 * Plugin Name: Carrousel
 * Author: Lenny Tran
 * Description: Affiche le carrousel associé à une galerie de Wordpress
 * Version: 1.0.0
 * Plugin URI: https://github.com/LennyT2004
 * Author URI: https://referenced.ca/
 */

 function enqueue_style_script() {
   $version_css = filemtime(plugin_dir_path( __FILE__ ) . "style.css");
   $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

   wp_enqueue_style(   'em_plugin_carrousel_css',
                     plugin_dir_url(__FILE__) . "style.css",
                     array(),
                     $version_css);

    wp_enqueue_script(  'em_plugin_carrousel_js',
                    plugin_dir_url(__FILE__) ."js/carrousel.js",
                    array(),
                    $version_js,
                    true);
 }

 add_action('wp_enqueue_scripts', 'enqueue_style_script');

 function genere_html() {
   $html = '
   <button class="bouton_ouvrir">Ouvrir Carrousel</button>
   <div class="carrousel">
      <button href="" class="carrousel_x">X</button>
      <figure class="carrousel_figure"></figure>
      <form action="" class="carrousel_form"></form>
   </div>
   ';

   return $html;
 }
 add_shortcode('carrousel', 'genere_html');