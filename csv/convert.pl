#!/usr/bin/perl

my $list = qx(ls);
my @arr = split "\n", $list;
for my $item(@arr) {
	my $name;
	if ($item =~ /(\S+)\.csv/) {
		$name = $1;
		print qx(mongoimport -d cloud_services -c $1 --type csv --file $item --headerline);
	}

}
