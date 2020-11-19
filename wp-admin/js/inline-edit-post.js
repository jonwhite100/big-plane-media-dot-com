/**
 * This file contains the functions needed for the inline editing of posts.
 *
 * @since 2.7.0
 * @output wp-admin/js/inline-edit-post.js
 */

<<<<<<< HEAD
/* global ajaxurl, typenow, inlineEditPost */
=======
/* global inlineEditL10n, ajaxurl, typenow, inlineEditPost */
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

window.wp = window.wp || {};

/**
 * Manages the quick edit and bulk edit windows for editing posts or pages.
 *
 * @namespace inlineEditPost
 *
 * @since 2.7.0
 *
 * @type {Object}
 *
 * @property {string} type The type of inline editor.
<<<<<<< HEAD
 * @property {string} what The prefix before the post ID.
=======
 * @property {string} what The prefix before the post id.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 *
 */
( function( $, wp ) {

	window.inlineEditPost = {

	/**
	 * Initializes the inline and bulk post editor.
	 *
<<<<<<< HEAD
	 * Binds event handlers to the Escape key to close the inline editor
	 * and to the save and close buttons. Changes DOM to be ready for inline
	 * editing. Adds event handler to bulk edit.
	 *
	 * @since 2.7.0
	 *
	 * @memberof inlineEditPost
	 *
	 * @return {void}
=======
	 * Binds event handlers to the escape key to close the inline editor
	 * and to the save and close buttons. Changes DOM to be ready for inline
	 * editing. Adds event handler to bulk edit.
	 *
	 * @memberof inlineEditPost
	 * @since 2.7.0
	 *
	 * @returns {void}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	 */
	init : function(){
		var t = this, qeRow = $('#inline-edit'), bulkRow = $('#bulk-edit');

		t.type = $('table.widefat').hasClass('pages') ? 'page' : 'post';
<<<<<<< HEAD
		// Post ID prefix.
		t.what = '#post-';

		/**
		 * Binds the Escape key to revert the changes and close the quick editor.
		 *
		 * @return {boolean} The result of revert.
		 */
		qeRow.keyup(function(e){
			// Revert changes if Escape key is pressed.
=======
		// Post id prefix.
		t.what = '#post-';

		/**
		 * Binds the escape key to revert the changes and close the quick editor.
		 *
		 * @returns {boolean} The result of revert.
		 */
		qeRow.keyup(function(e){
			// Revert changes if escape key is pressed.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			if ( e.which === 27 ) {
				return inlineEditPost.revert();
			}
		});

		/**
<<<<<<< HEAD
		 * Binds the Escape key to revert the changes and close the bulk editor.
		 *
		 * @return {boolean} The result of revert.
		 */
		bulkRow.keyup(function(e){
			// Revert changes if Escape key is pressed.
=======
		 * Binds the escape key to revert the changes and close the bulk editor.
		 *
		 * @returns {boolean} The result of revert.
		 */
		bulkRow.keyup(function(e){
			// Revert changes if escape key is pressed.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			if ( e.which === 27 ) {
				return inlineEditPost.revert();
			}
		});

		/**
		 * Reverts changes and close the quick editor if the cancel button is clicked.
		 *
<<<<<<< HEAD
		 * @return {boolean} The result of revert.
=======
		 * @returns {boolean} The result of revert.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		 */
		$( '.cancel', qeRow ).click( function() {
			return inlineEditPost.revert();
		});

		/**
		 * Saves changes in the quick editor if the save(named: update) button is clicked.
		 *
<<<<<<< HEAD
		 * @return {boolean} The result of save.
=======
		 * @returns {boolean} The result of save.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		 */
		$( '.save', qeRow ).click( function() {
			return inlineEditPost.save(this);
		});

		/**
<<<<<<< HEAD
		 * If Enter is pressed, and the target is not the cancel button, save the post.
		 *
		 * @return {boolean} The result of save.
=======
		 * If enter is pressed, and the target is not the cancel button, save the post.
		 *
		 * @returns {boolean} The result of save.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		 */
		$('td', qeRow).keydown(function(e){
			if ( e.which === 13 && ! $( e.target ).hasClass( 'cancel' ) ) {
				return inlineEditPost.save(this);
			}
		});

		/**
		 * Reverts changes and close the bulk editor if the cancel button is clicked.
		 *
<<<<<<< HEAD
		 * @return {boolean} The result of revert.
=======
		 * @returns {boolean} The result of revert.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		 */
		$( '.cancel', bulkRow ).click( function() {
			return inlineEditPost.revert();
		});

		/**
		 * Disables the password input field when the private post checkbox is checked.
		 */
		$('#inline-edit .inline-edit-private input[value="private"]').click( function(){
			var pw = $('input.inline-edit-password-input');
			if ( $(this).prop('checked') ) {
				pw.val('').prop('disabled', true);
			} else {
				pw.prop('disabled', false);
			}
		});

		/**
		 * Binds click event to the .editinline button which opens the quick editor.
		 */
		$( '#the-list' ).on( 'click', '.editinline', function() {
			$( this ).attr( 'aria-expanded', 'true' );
			inlineEditPost.edit( this );
		});

		$('#bulk-edit').find('fieldset:first').after(
			$('#inline-edit fieldset.inline-edit-categories').clone()
		).siblings( 'fieldset:last' ).prepend(
			$('#inline-edit label.inline-edit-tags').clone()
		);

		$('select[name="_status"] option[value="future"]', bulkRow).remove();

		/**
		 * Adds onclick events to the apply buttons.
		 */
		$('#doaction, #doaction2').click(function(e){
			var n;

			t.whichBulkButtonId = $( this ).attr( 'id' );
			n = t.whichBulkButtonId.substr( 2 );

			if ( 'edit' === $( 'select[name="' + n + '"]' ).val() ) {
				e.preventDefault();
				t.setBulk();
			} else if ( $('form#posts-filter tr.inline-editor').length > 0 ) {
				t.revert();
			}
		});
	},

	/**
	 * Toggles the quick edit window, hiding it when it's active and showing it when
	 * inactive.
	 *
<<<<<<< HEAD
	 * @since 2.7.0
	 *
	 * @memberof inlineEditPost
=======
	 * @memberof inlineEditPost
	 * @since 2.7.0
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	 *
	 * @param {Object} el Element within a post table row.
	 */
	toggle : function(el){
		var t = this;
		$( t.what + t.getId( el ) ).css( 'display' ) === 'none' ? t.revert() : t.edit( el );
	},

	/**
	 * Creates the bulk editor row to edit multiple posts at once.
	 *
<<<<<<< HEAD
	 * @since 2.7.0
	 *
	 * @memberof inlineEditPost
=======
	 * @memberof inlineEditPost
	 * @since 2.7.0
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	 */
	setBulk : function(){
		var te = '', type = this.type, c = true;
		this.revert();

		$( '#bulk-edit td' ).attr( 'colspan', $( 'th:visible, td:visible', '.widefat:first thead' ).length );

		// Insert the editor at the top of the table with an empty row above to maintain zebra striping.
		$('table.widefat tbody').prepend( $('#bulk-edit') ).prepend('<tr class="hidden"></tr>');
		$('#bulk-edit').addClass('inline-editor').show();

		/**
		 * Create a HTML div with the title and a link(delete-icon) for each selected
		 * post.
		 *
		 * Get the selected posts based on the checked checkboxes in the post table.
		 */
		$( 'tbody th.check-column input[type="checkbox"]' ).each( function() {

			// If the checkbox for a post is selected, add the post to the edit list.
			if ( $(this).prop('checked') ) {
				c = false;
				var id = $(this).val(), theTitle;
<<<<<<< HEAD
				theTitle = $('#inline_'+id+' .post_title').html() || wp.i18n.__( '(no title)' );
				te += '<div id="ttle'+id+'"><a id="_'+id+'" class="ntdelbutton" title="'+ wp.i18n.__( 'Remove From Bulk Edit' ) +'">X</a>'+theTitle+'</div>';
=======
				theTitle = $('#inline_'+id+' .post_title').html() || inlineEditL10n.notitle;
				te += '<div id="ttle'+id+'"><a id="_'+id+'" class="ntdelbutton" title="'+inlineEditL10n.ntdeltitle+'">X</a>'+theTitle+'</div>';
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			}
		});

		// If no checkboxes where checked, just hide the quick/bulk edit rows.
		if ( c ) {
			return this.revert();
		}

		// Add onclick events to the delete-icons in the bulk editors the post title list.
		$('#bulk-titles').html(te);
		/**
		 * Binds on click events to the checkboxes before the posts in the table.
		 *
		 * @listens click
		 */
		$('#bulk-titles a').click(function(){
			var id = $(this).attr('id').substr(1);

			$('table.widefat input[value="' + id + '"]').prop('checked', false);
			$('#ttle'+id).remove();
		});

		// Enable auto-complete for tags when editing posts.
		if ( 'post' === type ) {
			$( 'tr.inline-editor textarea[data-wp-taxonomy]' ).each( function ( i, element ) {
				/*
				 * While Quick Edit clones the form each time, Bulk Edit always re-uses
				 * the same form. Let's check if an autocomplete instance already exists.
				 */
				if ( $( element ).autocomplete( 'instance' ) ) {
					// jQuery equivalent of `continue` within an `each()` loop.
					return;
				}

				$( element ).wpTagsSuggest();
			} );
		}

		// Scrolls to the top of the table where the editor is rendered.
		$('html, body').animate( { scrollTop: 0 }, 'fast' );
	},

	/**
	 * Creates a quick edit window for the post that has been clicked.
	 *
<<<<<<< HEAD
	 * @since 2.7.0
	 *
	 * @memberof inlineEditPost
	 *
	 * @param {number|Object} id The ID of the clicked post or an element within a post
	 *                           table row.
	 * @return {boolean} Always returns false at the end of execution.
=======
	 * @memberof inlineEditPost
	 * @since 2.7.0
	 *
	 * @param {number|Object} id The id of the clicked post or an element within a post
	 *                           table row.
	 * @returns {boolean} Always returns false at the end of execution.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	 */
	edit : function(id) {
		var t = this, fields, editRow, rowData, status, pageOpt, pageLevel, nextPage, pageLoop = true, nextLevel, f, val, pw;
		t.revert();

		if ( typeof(id) === 'object' ) {
			id = t.getId(id);
		}

		fields = ['post_title', 'post_name', 'post_author', '_status', 'jj', 'mm', 'aa', 'hh', 'mn', 'ss', 'post_password', 'post_format', 'menu_order', 'page_template'];
		if ( t.type === 'page' ) {
			fields.push('post_parent');
		}

		// Add the new edit row with an extra blank row underneath to maintain zebra striping.
		editRow = $('#inline-edit').clone(true);
		$( 'td', editRow ).attr( 'colspan', $( 'th:visible, td:visible', '.widefat:first thead' ).length );

		$(t.what+id).removeClass('is-expanded').hide().after(editRow).after('<tr class="hidden"></tr>');

		// Populate fields in the quick edit window.
		rowData = $('#inline_'+id);
		if ( !$(':input[name="post_author"] option[value="' + $('.post_author', rowData).text() + '"]', editRow).val() ) {

			// The post author no longer has edit capabilities, so we need to add them to the list of authors.
			$(':input[name="post_author"]', editRow).prepend('<option value="' + $('.post_author', rowData).text() + '">' + $('#' + t.type + '-' + id + ' .author').text() + '</option>');
		}
		if ( $( ':input[name="post_author"] option', editRow ).length === 1 ) {
			$('label.inline-edit-author', editRow).hide();
		}

		for ( f = 0; f < fields.length; f++ ) {
			val = $('.'+fields[f], rowData);

			/**
			 * Replaces the image for a Twemoji(Twitter emoji) with it's alternate text.
			 *
<<<<<<< HEAD
			 * @return {string} Alternate text from the image.
=======
			 * @returns Alternate text from the image.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			 */
			val.find( 'img' ).replaceWith( function() { return this.alt; } );
			val = val.text();
			$(':input[name="' + fields[f] + '"]', editRow).val( val );
		}

		if ( $( '.comment_status', rowData ).text() === 'open' ) {
			$( 'input[name="comment_status"]', editRow ).prop( 'checked', true );
		}
		if ( $( '.ping_status', rowData ).text() === 'open' ) {
			$( 'input[name="ping_status"]', editRow ).prop( 'checked', true );
		}
		if ( $( '.sticky', rowData ).text() === 'sticky' ) {
			$( 'input[name="sticky"]', editRow ).prop( 'checked', true );
		}

		/**
		 * Creates the select boxes for the categories.
		 */
		$('.post_category', rowData).each(function(){
			var taxname,
				term_ids = $(this).text();

			if ( term_ids ) {
				taxname = $(this).attr('id').replace('_'+id, '');
				$('ul.'+taxname+'-checklist :checkbox', editRow).val(term_ids.split(','));
			}
		});

		/**
		 * Gets all the taxonomies for live auto-fill suggestions when typing the name
		 * of a tag.
		 */
		$('.tags_input', rowData).each(function(){
			var terms = $(this),
				taxname = $(this).attr('id').replace('_' + id, ''),
				textarea = $('textarea.tax_input_' + taxname, editRow),
<<<<<<< HEAD
				comma = wp.i18n._x( ',', 'tag delimiter' ).trim();
=======
				comma = inlineEditL10n.comma;
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

			terms.find( 'img' ).replaceWith( function() { return this.alt; } );
			terms = terms.text();

			if ( terms ) {
				if ( ',' !== comma ) {
					terms = terms.replace(/,/g, comma);
				}
				textarea.val(terms);
			}

			textarea.wpTagsSuggest();
		});

		// Handle the post status.
		status = $('._status', rowData).text();
		if ( 'future' !== status ) {
			$('select[name="_status"] option[value="future"]', editRow).remove();
		}

		pw = $( '.inline-edit-password-input' ).prop( 'disabled', false );
		if ( 'private' === status ) {
			$('input[name="keep_private"]', editRow).prop('checked', true);
			pw.val( '' ).prop( 'disabled', true );
		}

		// Remove the current page and children from the parent dropdown.
		pageOpt = $('select[name="post_parent"] option[value="' + id + '"]', editRow);
		if ( pageOpt.length > 0 ) {
			pageLevel = pageOpt[0].className.split('-')[1];
			nextPage = pageOpt;
			while ( pageLoop ) {
				nextPage = nextPage.next('option');
				if ( nextPage.length === 0 ) {
					break;
				}

				nextLevel = nextPage[0].className.split('-')[1];

				if ( nextLevel <= pageLevel ) {
					pageLoop = false;
				} else {
					nextPage.remove();
					nextPage = pageOpt;
				}
			}
			pageOpt.remove();
		}

		$(editRow).attr('id', 'edit-'+id).addClass('inline-editor').show();
		$('.ptitle', editRow).focus();

		return false;
	},

	/**
	 * Saves the changes made in the quick edit window to the post.
<<<<<<< HEAD
	 * Ajax saving is only for Quick Edit and not for bulk edit.
	 *
	 * @since 2.7.0
	 *
	 * @param {number} id The ID for the post that has been changed.
	 * @return {boolean} False, so the form does not submit when pressing
	 *                   Enter on a focused field.
=======
	 * AJAX saving is only for Quick Edit and not for bulk edit.
	 *
	 * @since 2.7.0
	 *
	 * @param   {int}     id The id for the post that has been changed.
	 * @returns {boolean}    false, so the form does not submit when pressing
	 *                       Enter on a focused field.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	 */
	save : function(id) {
		var params, fields, page = $('.post_status_page').val() || '';

		if ( typeof(id) === 'object' ) {
			id = this.getId(id);
		}

		$( 'table.widefat .spinner' ).addClass( 'is-active' );

		params = {
			action: 'inline-save',
			post_type: typenow,
			post_ID: id,
			edit_date: 'true',
			post_status: page
		};

		fields = $('#edit-'+id).find(':input').serialize();
		params = fields + '&' + $.param(params);

<<<<<<< HEAD
		// Make Ajax request.
=======
		// Make ajax request.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		$.post( ajaxurl, params,
			function(r) {
				var $errorNotice = $( '#edit-' + id + ' .inline-edit-save .notice-error' ),
					$error = $errorNotice.find( '.error' );

				$( 'table.widefat .spinner' ).removeClass( 'is-active' );
				$( '.ac_results' ).hide();

				if (r) {
					if ( -1 !== r.indexOf( '<tr' ) ) {
						$(inlineEditPost.what+id).siblings('tr.hidden').addBack().remove();
						$('#edit-'+id).before(r).remove();
						$( inlineEditPost.what + id ).hide().fadeIn( 400, function() {
							// Move focus back to the Quick Edit button. $( this ) is the row being animated.
							$( this ).find( '.editinline' )
								.attr( 'aria-expanded', 'false' )
								.focus();
<<<<<<< HEAD
							wp.a11y.speak( wp.i18n.__( 'Changes saved.' ) );
=======
							wp.a11y.speak( inlineEditL10n.saved );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
						});
					} else {
						r = r.replace( /<.[^<>]*?>/g, '' );
						$errorNotice.removeClass( 'hidden' );
						$error.html( r );
						wp.a11y.speak( $error.text() );
					}
				} else {
					$errorNotice.removeClass( 'hidden' );
<<<<<<< HEAD
					$error.text( wp.i18n.__( 'Error while saving the changes.' ) );
					wp.a11y.speak( wp.i18n.__( 'Error while saving the changes.' ) );
=======
					$error.html( inlineEditL10n.error );
					wp.a11y.speak( inlineEditL10n.error );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
				}
			},
		'html');

		// Prevent submitting the form when pressing Enter on a focused field.
		return false;
	},

	/**
	 * Hides and empties the Quick Edit and/or Bulk Edit windows.
	 *
<<<<<<< HEAD
	 * @since 2.7.0
	 *
	 * @memberof inlineEditPost
	 *
	 * @return {boolean} Always returns false.
=======
	 * @memberof    inlineEditPost
	 * @since 2.7.0
	 *
	 * @returns {boolean} Always returns false.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	 */
	revert : function(){
		var $tableWideFat = $( '.widefat' ),
			id = $( '.inline-editor', $tableWideFat ).attr( 'id' );

		if ( id ) {
			$( '.spinner', $tableWideFat ).removeClass( 'is-active' );
			$( '.ac_results' ).hide();

			if ( 'bulk-edit' === id ) {

				// Hide the bulk editor.
				$( '#bulk-edit', $tableWideFat ).removeClass( 'inline-editor' ).hide().siblings( '.hidden' ).remove();
				$('#bulk-titles').empty();

				// Store the empty bulk editor in a hidden element.
				$('#inlineedit').append( $('#bulk-edit') );

				// Move focus back to the Bulk Action button that was activated.
				$( '#' + inlineEditPost.whichBulkButtonId ).focus();
			} else {

				// Remove both the inline-editor and its hidden tr siblings.
				$('#'+id).siblings('tr.hidden').addBack().remove();
				id = id.substr( id.lastIndexOf('-') + 1 );

				// Show the post row and move focus back to the Quick Edit button.
				$( this.what + id ).show().find( '.editinline' )
					.attr( 'aria-expanded', 'false' )
					.focus();
			}
		}

		return false;
	},

	/**
<<<<<<< HEAD
	 * Gets the ID for a the post that you want to quick edit from the row in the quick
	 * edit table.
	 *
	 * @since 2.7.0
	 *
	 * @memberof inlineEditPost
	 *
	 * @param {Object} o DOM row object to get the ID for.
	 * @return {string} The post ID extracted from the table row in the object.
=======
	 * Gets the id for a the post that you want to quick edit from the row in the quick
	 * edit table.
	 *
	 * @memberof    inlineEditPost
	 * @since 2.7.0
	 *
	 * @param   {Object} o DOM row object to get the id for.
	 * @returns {string}   The post id extracted from the table row in the object.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	 */
	getId : function(o) {
		var id = $(o).closest('tr').attr('id'),
			parts = id.split('-');
		return parts[parts.length - 1];
	}
};

$( document ).ready( function(){ inlineEditPost.init(); } );

// Show/hide locks on posts.
$( document ).on( 'heartbeat-tick.wp-check-locked-posts', function( e, data ) {
	var locked = data['wp-check-locked-posts'] || {};

	$('#the-list tr').each( function(i, el) {
		var key = el.id, row = $(el), lock_data, avatar;

		if ( locked.hasOwnProperty( key ) ) {
			if ( ! row.hasClass('wp-locked') ) {
				lock_data = locked[key];
				row.find('.column-title .locked-text').text( lock_data.text );
				row.find('.check-column checkbox').prop('checked', false);

				if ( lock_data.avatar_src ) {
<<<<<<< HEAD
					avatar = $( '<img />', {
						'class': 'avatar avatar-18 photo',
						width: 18,
						height: 18,
						alt: '',
						src: lock_data.avatar_src,
						srcset: lock_data.avatar_src_2x ? lock_data.avatar_src_2x + ' 2x' : undefined
					} );
=======
					avatar = $( '<img class="avatar avatar-18 photo" width="18" height="18" alt="" />' ).attr( 'src', lock_data.avatar_src.replace( /&amp;/g, '&' ) );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
					row.find('.column-title .locked-avatar').empty().append( avatar );
				}
				row.addClass('wp-locked');
			}
		} else if ( row.hasClass('wp-locked') ) {
			row.removeClass( 'wp-locked' ).find( '.locked-info span' ).empty();
		}
	});
}).on( 'heartbeat-send.wp-check-locked-posts', function( e, data ) {
	var check = [];

	$('#the-list tr').each( function(i, el) {
		if ( el.id ) {
			check.push( el.id );
		}
	});

	if ( check.length ) {
		data['wp-check-locked-posts'] = check;
	}
}).ready( function() {

<<<<<<< HEAD
	// Set the heartbeat interval to 15 seconds.
=======
	// Set the heartbeat interval to 15 sec.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	if ( typeof wp !== 'undefined' && wp.heartbeat ) {
		wp.heartbeat.interval( 15 );
	}
});

})( jQuery, window.wp );
