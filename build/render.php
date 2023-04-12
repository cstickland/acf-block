<div <?php echo get_block_wrapper_attributes(['class' => 'faq']); ?>>
	<h1 class="title"><?php the_field('title'); ?></h1>
	<ul class="questions">
		<?php if (have_rows('accordion')) :
			while (have_rows('accordion')) : the_row();
		?>
				<li class="accordion">
					<h3 class="question"><?php the_sub_field('question'); ?></h1>
					<div class="answer"><?php the_sub_field('answer'); ?></div>
				</li>
		<?php endwhile;
		endif; ?>
	</ul>
</div>
