-- God stuff



INSERT
	INTO comments (
		id,
		post,
		content
	) VALUES (
		(SELECT
			('1'::ltree || (count(*) + 1)::text::ltree)
			FROM comments AS child
			WHERE child.id ~ ('1' || '.*{1}')::lquery
		),
		3,
		'hashtag [#topcomment](#)'
	) RETURNING *





SELECT
	*, (
		SELECT
			(comments.id || (count(*) + 1)::text::ltree)
			FROM comments AS child
			WHERE child.id ~ (comments.id::text || '.*{1}')::lquery
	) AS newId
	FROM comments
	ORDER BY post ASC, id ASC 
	
	


-- Ok ish





SELECT
	*,
	(
		SELECT
			count(*)
			FROM comments
			WHERE id ~ (parents.id::text || '.*{1}')::lquery
	) AS sub,
	(
		SELECT
			count(*) + 1
			FROM comments
			WHERE id ~ (parents.id::text || '.*{1}')::lquery
	) AS newId
	FROM comments AS parents
	ORDER BY post ASC, id ASC 



-- Trash

INSERT
	INTO comments (
		id,
		content,
		mutagen
	) VALUES (
		(SELECT count(*) FROM comments WHERE id ~ '1.*{1}'),
		'i comment aswell',
		crypt('fakeass', gen_salt('bf', 8))
	) RETURNING id




SELECT
	parents.id,
	(
		SELECT
			count(*)
			FROM comments AS childs
			WHERE childs.id <@ parents.id
			GROUP BY parents.id
	) AS sub
	FROM comments AS parents
	ORDER BY post ASC, id ASC 
	

	SELECT
	*
	FROM comments
	WHERE id ~ ('1.1.2'||'.*{1}')::lquery
	ORDER BY post ASC, id ASC 
	