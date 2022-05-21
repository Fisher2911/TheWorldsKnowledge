package io.github.fisher2911.theworldsknowledge.data.provider;

import java.util.Optional;

public interface Provider<T, U> {

    Optional<T> get(final U u);

}
