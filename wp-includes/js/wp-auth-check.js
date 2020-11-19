/**
 * Interim login dialog.
 *
 * @output wp-includes/js/wp-auth-check.js
 */

<<<<<<< HEAD
( function( $ ) {
	var wrap,
		tempHidden,
		tempHiddenTimeout;
=======
/* global adminpage */
(function($){
	var wrap, next;
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

	/**
	 * Shows the authentication form popup.
	 *
	 * @since 3.6.0
	 * @private
	 */
	function show() {
<<<<<<< HEAD
		var parent = $( '#wp-auth-check' ),
			form = $( '#wp-auth-check-form' ),
			noframe = wrap.find( '.wp-auth-fallback-expired' ),
=======
		var parent = $('#wp-auth-check'),
			form = $('#wp-auth-check-form'),
			noframe = wrap.find('.wp-auth-fallback-expired'),
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			frame, loaded = false;

		if ( form.length ) {
			// Add unload confirmation to counter (frame-busting) JS redirects.
<<<<<<< HEAD
			$( window ).on( 'beforeunload.wp-auth-check', function( event ) {
				event.originalEvent.returnValue = window.wp.i18n.__( 'Your session has expired. You can log in again from this page or go to the login page.' );
			});

			frame = $( '<iframe id="wp-auth-check-frame" frameborder="0">' ).attr( 'title', noframe.text() );
=======
			$(window).on( 'beforeunload.wp-auth-check', function(e) {
				e.originalEvent.returnValue = window.authcheckL10n.beforeunload;
			});

			frame = $('<iframe id="wp-auth-check-frame" frameborder="0">').attr( 'title', noframe.text() );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			frame.on( 'load', function() {
				var height, body;

				loaded = true;
				// Remove the spinner to avoid unnecessary CPU/GPU usage.
				form.removeClass( 'loading' );

				try {
<<<<<<< HEAD
					body = $( this ).contents().find( 'body' );
					height = body.height();
				} catch( er ) {
					wrap.addClass( 'fallback' );
=======
					body = $(this).contents().find('body');
					height = body.height();
				} catch(e) {
					wrap.addClass('fallback');
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
					parent.css( 'max-height', '' );
					form.remove();
					noframe.focus();
					return;
				}

				if ( height ) {
<<<<<<< HEAD
					if ( body && body.hasClass( 'interim-login-success' ) ) {
						hide();
					} else {
						parent.css( 'max-height', height + 40 + 'px' );
					}
				} else if ( ! body || ! body.length ) {
					// Catch "silent" iframe origin exceptions in WebKit
					// after another page is loaded in the iframe.
					wrap.addClass( 'fallback' );
=======
					if ( body && body.hasClass('interim-login-success') )
						hide();
					else
						parent.css( 'max-height', height + 40 + 'px' );
				} else if ( ! body || ! body.length ) {
					// Catch "silent" iframe origin exceptions in WebKit after another page is
					// loaded in the iframe.
					wrap.addClass('fallback');
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
					parent.css( 'max-height', '' );
					form.remove();
					noframe.focus();
				}
<<<<<<< HEAD
			}).attr( 'src', form.data( 'src' ) );
=======
			}).attr( 'src', form.data('src') );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

			form.append( frame );
		}

		$( 'body' ).addClass( 'modal-open' );
<<<<<<< HEAD
		wrap.removeClass( 'hidden' );

		if ( frame ) {
			frame.focus();
			/*
			 * WebKit doesn't throw an error if the iframe fails to load
			 * because of "X-Frame-Options: DENY" header.
			 * Wait for 10 seconds and switch to the fallback text.
			 */
			setTimeout( function() {
				if ( ! loaded ) {
					wrap.addClass( 'fallback' );
=======
		wrap.removeClass('hidden');

		if ( frame ) {
			frame.focus();
			// WebKit doesn't throw an error if the iframe fails to load because of
			// "X-Frame-Options: DENY" header.
			// Wait for 10 sec. and switch to the fallback text.
			setTimeout( function() {
				if ( ! loaded ) {
					wrap.addClass('fallback');
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
					form.remove();
					noframe.focus();
				}
			}, 10000 );
		} else {
			noframe.focus();
		}
	}

	/**
	 * Hides the authentication form popup.
	 *
	 * @since 3.6.0
	 * @private
	 */
	function hide() {
<<<<<<< HEAD
		var adminpage = window.adminpage,
			wp        = window.wp;

		$( window ).off( 'beforeunload.wp-auth-check' );

		// When on the Edit Post screen, speed up heartbeat
		// after the user logs in to quickly refresh nonces.
		if ( ( adminpage === 'post-php' || adminpage === 'post-new-php' ) && wp && wp.heartbeat ) {
=======
		$(window).off( 'beforeunload.wp-auth-check' );

		// When on the Edit Post screen, speed up heartbeat after the user logs in to
		// quickly refresh nonces.
		if ( typeof adminpage !== 'undefined' && ( adminpage === 'post-php' || adminpage === 'post-new-php' ) &&
			typeof wp !== 'undefined' && wp.heartbeat ) {

			$(document).off( 'heartbeat-tick.wp-auth-check' );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			wp.heartbeat.connectNow();
		}

		wrap.fadeOut( 200, function() {
<<<<<<< HEAD
			wrap.addClass( 'hidden' ).css( 'display', '' );
			$( '#wp-auth-check-frame' ).remove();
=======
			wrap.addClass('hidden').css('display', '');
			$('#wp-auth-check-frame').remove();
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			$( 'body' ).removeClass( 'modal-open' );
		});
	}

	/**
<<<<<<< HEAD
	 * Set or reset the tempHidden variable used to pause showing of the modal
	 * after a user closes it without logging in.
	 *
	 * @since 5.5.0
	 * @private
	 */
	function setShowTimeout() {
		tempHidden = true;
		window.clearTimeout( tempHiddenTimeout );
		tempHiddenTimeout = window.setTimeout(
			function() {
				tempHidden = false;
			},
			300000 // 5 min.
		);
=======
	 * Schedules when the next time the authentication check will be done.
	 *
	 * @since 3.6.0
	 * @private
	 */
	function schedule() {
		// In seconds, default 3 min.
		var interval = parseInt( window.authcheckL10n.interval, 10 ) || 180;
		next = ( new Date() ).getTime() + ( interval * 1000 );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	}

	/**
	 * Binds to the Heartbeat Tick event.
	 *
	 * - Shows the authentication form popup if user is not logged in.
	 * - Hides the authentication form popup if it is already visible and user is
	 *   logged in.
	 *
	 * @ignore
	 *
	 * @since 3.6.0
	 *
	 * @param {Object} e The heartbeat-tick event that has been triggered.
	 * @param {Object} data Response data.
	 */
	$( document ).on( 'heartbeat-tick.wp-auth-check', function( e, data ) {
		if ( 'wp-auth-check' in data ) {
<<<<<<< HEAD
			if ( ! data['wp-auth-check'] && wrap.hasClass( 'hidden' ) && ! tempHidden ) {
				show();
			} else if ( data['wp-auth-check'] && ! wrap.hasClass( 'hidden' ) ) {
				hide();
			}
		}
	}).ready( function() {
=======
			schedule();
			if ( ! data['wp-auth-check'] && wrap.hasClass('hidden') ) {
				show();
			} else if ( data['wp-auth-check'] && ! wrap.hasClass('hidden') ) {
				hide();
			}
		}

	/**
	 * Binds to the Heartbeat Send event.
	 *
	 * @ignore
	 *
	 * @since 3.6.0
	 *
	 * @param {Object} e The heartbeat-send event that has been triggered.
	 * @param {Object} data Response data.
	 */
	}).on( 'heartbeat-send.wp-auth-check', function( e, data ) {
		if ( ( new Date() ).getTime() > next ) {
			data['wp-auth-check'] = true;
		}

	}).ready( function() {
		schedule();
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

		/**
		 * Hides the authentication form popup when the close icon is clicked.
		 *
		 * @ignore
		 *
		 * @since 3.6.0
		 */
<<<<<<< HEAD
		wrap = $( '#wp-auth-check-wrap' );
		wrap.find( '.wp-auth-check-close' ).on( 'click', function() {
			hide();
			setShowTimeout();
=======
		wrap = $('#wp-auth-check-wrap');
		wrap.find('.wp-auth-check-close').on( 'click', function() {
			hide();
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		});
	});

}(jQuery));
